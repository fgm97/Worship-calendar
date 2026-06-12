exports.handler = async function () {
  try {
    const binId = process.env.JSONBIN_BIN_ID;
    const key = process.env.JSONBIN_KEY;

    if (!binId || !key) {
      return { statusCode: 500, body: "Missing JSONBIN_BIN_ID or JSONBIN_KEY" };
    }

    const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
      headers: {
        "X-Master-Key": key,
        "X-Bin-Meta": "false"
      }
    });

    const text = await response.text();

    return {
      statusCode: response.status,
      headers: { "Content-Type": "text/plain" },
      body: text
    };
  } catch (error) {
    return { statusCode: 500, body: error.message };
  }
};
