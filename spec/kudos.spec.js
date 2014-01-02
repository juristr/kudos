describe('The Kudoable element', function(){

    beforeEach(function(){
        //add a dom element to test upon
        var $fixture = $('<div>')
                        .addClass('js-fixture');
        $('body').append($fixture);

        this._fixture = $fixture;
    });

    afterEach(function(){
        this._fixture.remove();
    });

    it('should have a fixture available', function(){
        expect(this._fixture).not.toBe(undefined);
        expect($('.js-fixture').length).toBe(1);
    });


    it('should add the active class when applying the kudo', function(){
        var kudoable = this._fixture.kudoable();
        
        // act
        kudoable.trigger('touchstart');

        // assert
        expect(this._fixture.hasClass('active')).toBe(true);
    })

});