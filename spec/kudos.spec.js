describe('The Kudoable element', function(){

    var clock;

    beforeEach(function(){
        //add a dom element to test upon
        var $fixture = $('<div>')
                        .addClass('js-fixture');
        $('body').append($fixture);

        this._fixture = $fixture;

        //setup sinon fake timers
        clock = sinon.useFakeTimers();
    });

    afterEach(function(){
        this._fixture.remove();

        clock.restore();
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
    });

    it('should not have the active class after 700 ms', function(){
        var kudoable = this._fixture.kudoable();
        kudoable.trigger('touchstart');

        // act & assert
        clock.tick(699);
        expect(this._fixture.hasClass('active')).toBe(true);  

        clock.tick(1);
        expect(this._fixture.hasClass('active')).toBe(false);  
    });

    describe('when completing', function(){


        it('should add the complete class to the element it is bound to', function(){
            var kudoable = this._fixture.kudoable();

            // act
            kudoable.trigger('touchstart');
            clock.tick(700);

            //assert
            expect(this._fixture.hasClass('complete')).toBe(true);
        });

    });

});