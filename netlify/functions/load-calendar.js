exports.handler = async function () {
  try {
    const binId = process.env.JSONBIN_BIN_ID;
    const key = process.env.JSONBIN_KEY;

    const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
      headers: {
        "X-Master-Key": key,
        "X-Bin-Meta": "false"
      }
    });

    if (!response.ok) {
      return { statusCode: response.status, body: "Failed to load calendar" };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return { statusCode: 500, body: "Server error" };
  }
};