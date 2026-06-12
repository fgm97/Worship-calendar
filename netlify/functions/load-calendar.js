exports.handler = async function () {
  return {
    statusCode: 200,
    body: JSON.stringify({
      hasBinId: !!process.env.JSONBIN_BIN_ID,
      hasKey: !!process.env.JSONBIN_KEY,
      binIdLength: process.env.JSONBIN_BIN_ID?.length || 0,
      keyLength: process.env.JSONBIN_KEY?.length || 0
    })
  };
};
