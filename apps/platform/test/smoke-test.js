const timeout = 5000;

const tests = {
  'smoke test: gene-page': browser => {
    return browser
      .url('http://localhost:8000/target/ENSG00000091831')
      .waitForElementVisible('body', timeout)
      .assert.title('ESR1 | Eligere')
      .end();
  },
  'smoke test: disease-page': browser => {
    return browser
      .url('http://localhost:8000/disease/EFO_0003767')
      .waitForElementVisible('body', timeout)
      .assert.title('inflammatory bowel disease | Eligere')
      .end();
  },
  'smoke test: drug-page': browser => {
    return browser
      .url('http://localhost:8000/drug/CHEMBL1201834')
      .waitForElementVisible('body', timeout)
      .assert.title('CANAKINUMAB | Eligere')
      .end();
  },
  'smoke test: evidence-page': browser => {
    return browser
      .url('http://localhost:8000/evidence/ENSG00000091831/EFO_0000305')
      .waitForElementVisible('body', timeout)
      .assert.title(
        'Evidence for ESR1 in breast carcinoma | Eligere'
      )
      .end();
  },
};

module.exports = tests;
