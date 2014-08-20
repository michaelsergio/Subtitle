// Splitter rips big blocks of text into sentences that can be mapped into
// sentences in the DOM.
//
// Predefined terms is a dictionary of terms that return
// the translations.
//
// This class is for testing.
var FakeTranslateService = function(splitter, predefinedTerms) {
  this.splitter = splitter;
  this.predefinedTerms = predefinedTerms;
};

/**
 * Does the dirty work.
 */
FakeTranslateService.prototype.translate = function(blockOfText) {
  // sentences is an array of strings
  var sentences = this.splitter.splitBySentences(blockOfText);

  // translations is a one-to-one array of strings for sentences
  var translations;

  translations = sentences.map(function(sentence) {
    var translation = this.predefinedTerms[sentence];
    if (translation === undefined) { translation = "XXXXX"; }
    return translation;
  }, this);

  return {
    error:"",
    translations:translations // One string per sentence
  };
};

