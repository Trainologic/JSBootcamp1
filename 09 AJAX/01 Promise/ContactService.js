var contactService = (function() {

    var baseUrl = $("base").attr("href");

    function buildIndex(contacts) {
        var index = {};

        contacts.forEach(function (contact) {
            index[contact.id] = contact;
        });

        return index;
    }

    function getAllContacts() {
        var promise = Q($.ajax({
            type: "GET",
            url: baseUrl + "contacts.json",
        })).then(function(contacts) {
            var index = buildIndex(contacts);

            contacts.forEach(function (contact) {
                contact.parent = index[contact.parentId] || null;
            });

            return contacts;
        });
        
        return promise;
    }

    return {
        getAllContacts: getAllContacts,
    };
    
})();
