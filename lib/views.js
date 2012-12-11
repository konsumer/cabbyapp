exports.getByType = {
    map: function (doc) {
        if (!doc.type) return;
        emit(doc.type, null);
    }
};

exports.getByTypeFull = {
    map: function (doc) {
        if (!doc.type) return;
        emit(doc.type, doc);
    }
};
