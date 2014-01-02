(function($, undefined){

    var firebaseUrl = 'https://juristr.firebaseio.com/kudos',
        key = encodeURIComponent(document.location.pathname),
        kudoStore = new Firebase(firebaseUrl);

    // slightly hacky way of updating the count
    var updateKudoCount = function(count){
        $('.count .num').html(count);
    };

    //retrieve the current kudo count
    $.getJSON(firebaseUrl + '/' + key + ".json", function(result){
        if(result[key]){
            updateKudoCount(result[key].count);
        }
    });

    $(document).on('kudo.added', function(e, data){
        kudoStore.child(key).set({ count: data.count });
    });

    $(document).on('kudo.removed', function(e, data){
       kudoStore.child(key).set({ count: data.count }); 
    });

    // listening for updates
    var kudoEntry = new Firebase('https://juristr.firebaseio.com/kudos/' + key);
    kudoEntry.on('value', function(snapshot){
        updateKudoCount(snapshot.val()[key].count);
    });

})(jQuery);