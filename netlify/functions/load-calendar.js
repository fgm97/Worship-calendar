exports.handler = async function () {
  try {
    const response = await fetch(
      `https://api.jsonbin.io/v3/b/${process.env.JSONBIN_BIN_ID}/latest`,
      {
        headers: {
          "X-Master-Key": process.env.JSONBIN_KEY,
          "X-Bin-Meta": "false"
        }
      }
    );

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: err.toString()
    };
  }
};
