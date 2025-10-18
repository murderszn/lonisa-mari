const functions = require('firebase-functions');
const Airtable = require('airtable');

// Initialize Airtable
const base = new Airtable({ apiKey: functions.config().airtable.api_key }).base(functions.config().airtable.base_id);

exports.subscribeToNewsletter = functions.https.onCall(async (data, context) => {
  // Enable CORS
  const cors = require('cors')({ origin: true });

  return cors((req, res) => {
    // Only allow POST requests
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email, source = 'website' } = req.body;

    // Validate email
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    // Check if email already exists
    base('Subscribers').select({
      filterByFormula: `{Email} = '${email}'`
    }).firstPage((err, records) => {
      if (err) {
        console.error('Airtable error:', err);
        return res.status(500).json({ error: 'Database error' });
      }

      if (records.length > 0) {
        return res.status(200).json({
          success: true,
          message: 'Email already subscribed',
          alreadySubscribed: true
        });
      }

      // Add new subscriber
      base('Subscribers').create({
        Email: email,
        Source: source,
        'Subscribe Date': new Date().toISOString(),
        Status: 'Active'
      }, (err, record) => {
        if (err) {
          console.error('Airtable create error:', err);
          return res.status(500).json({ error: 'Failed to subscribe' });
        }

        console.log('New subscriber added:', record.getId());
        return res.status(200).json({
          success: true,
          message: 'Successfully subscribed!',
          recordId: record.getId()
        });
      });
    });
  });
});

// Alternative approach using onCall for better Firebase integration
exports.addSubscriber = functions.https.onCall(async (data, context) => {
  const { email, source = 'website' } = data;

  // Validate email
  if (!email || !email.includes('@')) {
    throw new functions.https.HttpsError('invalid-argument', 'Valid email is required');
  }

  try {
    // Check if email already exists
    const existingRecords = await base('Subscribers').select({
      filterByFormula: `{Email} = '${email}'`,
      maxRecords: 1
    }).firstPage();

    if (existingRecords.length > 0) {
      return {
        success: true,
        message: 'Email already subscribed',
        alreadySubscribed: true
      };
    }

    // Add new subscriber
    const newRecord = await base('Subscribers').create({
      Email: email,
      Source: source,
      'Subscribe Date': new Date().toISOString(),
      Status: 'Active'
    });

    console.log('New subscriber added:', newRecord.getId());

    return {
      success: true,
      message: 'Successfully subscribed!',
      recordId: newRecord.getId()
    };

  } catch (error) {
    console.error('Airtable error:', error);
    throw new functions.https.HttpsError('internal', 'Failed to subscribe');
  }
});
