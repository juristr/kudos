(function($, undefined){

    // replace this url with yours!!
    var firebaseUrl = 'https://firekudos.firebaseio.com/kudos',
        key = document.location.pathname.replace(/[\/-]/g,''),
        kudoStore = new Firebase(firebaseUrl);


    var ref = new Firebase("https://firekudos.firebaseio.com");
    ref.onAuth(function(authData) {
        // if (authData && isNewUser) {
        //     // save the user's profile into Firebase so we can
        //     // list users, use them in security rules, and show profiles
        //     ref.child('users').child(authData.uid).set(authData);
        // }
        if (authData) {
            // user authenticated with Firebase
            console.log("User ID: " + authData.uid + ", Provider: " + authData.provider);

            new Firebase("https://firekudos.firebaseio.com/users/" + authData.uid).once('value', function(snapshot){
                var user = snapshot.val();
                if(user !== null){
                    console.log('user already known');
                }else{
                    ref.child('users').child(authData.uid).set(authData);
                }
            });
        } else {
            // user is logged out
        }
    });

    var authData = ref.getAuth();
    if(authData == null){
        console.log('Authenticating user');
        ref.authAnonymously(function(err, authData) {
            if(authData){
                console.log('Logged in', authData);
            }else{
                console.log('Error authenticating');
            }
        });
    }

    // slightly hacky way of updating the count
    var updateKudoCount = function(count){
        $('.count .num').html(count);
    };

    // fix for locla debugging
    if(key === ''){
        key = 'localhost'
    }

    //retrieve the current kudo count
    new Firebase("https://firekudos.firebaseio.com/kudos/" + key).once('value', function(snap){
        var article = snap.val();
        if(article !== null){
            var likeCount = 0;
            for(var prop in article.likes){
                likeCount++;
            }
            updateKudoCount(likeCount);
        }else{
            updateKudoCount(0);
        }
    });

    $(document).on('kudo.added', function(e, data){
        kudoStore.child(key).child('likes').child(authData.uid).set({
            count: 1
        });
    });

    $(document).on('kudo.removed', function(e, data){
       kudoStore.child(key).child('likes').child(authData.uid).remove();
    });

    // listening for updates
    var kudoEntry = new Firebase(firebaseUrl + '/' + key);
    kudoEntry.on('value', function(snapshot){
        if(snapshot){
            var article = snapshot.val();
            var likeCount = 0;
            if(article){
                for(var prop in article.likes){
                    likeCount++;
                }
            }
            updateKudoCount(likeCount);
        }
    });

})(jQuery);