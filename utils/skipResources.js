module.exports = async (page, types) => {
  await page.setRequestInterception(true);

  page.on('request', request => {
    if (types.includes(request.resourceType())) {
      request.abort();
    } else {
      request.continue();
    }
  });
}
