const nHentai = require("@v0idpointer/nhentai.js");

var search = nHentai.BeginSearch(); // Creates a new search object.
search.GetTag("anal").then(tag => { // Get a Tag object using a name.
    // 'doujins' is an array containing all Doujins that match the specified tag(s).
    search.SearchByTags(tag).then(doujins => {
        for(let i = 0; i < doujins.length; i++)
            console.log(doujins[i].GetCover()); // Print Doujin titles.
    });
});


