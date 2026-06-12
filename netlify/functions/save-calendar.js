exports.handler = async function (event) {
  try {
    const binId = process.env.JSONBIN_BIN_ID;
    const key = process.env.JSONBIN_KEY;
    const payload = JSON.parse(event.body);

    const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": key
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      return { statusCode: response.status, body: "Failed to save calendar" };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    return { statusCode: 500, body: "Server error" };
  }
};