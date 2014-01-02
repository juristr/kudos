describe('The Kudoable element', function(){

    var clock,
        fixture,
        kudoable;

    beforeEach(function(){
        //add a dom element to test upon
        var $fixture = $('<div>')
                        .addClass('js-fixture');
        $('body').append($fixture);

        fixture = $fixture;

        //instantiate the kudoable element
        kudoable = fixture.kudoable();

        //setup sinon fake timers
        clock = sinon.useFakeTimers();
    });

    afterEach(function(){
        fixture.remove();

        clock.restore();
    });

    describe('when touching', function(){

        beforeEach(function(){
            kudoable.trigger('touchstart');
        });

        it('should activate itself', function(){
            
            // assert
            expect(fixture.hasClass('active')).toBe(true);
        });

        it('should complete after 700ms', function(){
            // act & assert
            clock.tick(699);
            expect(fixture.hasClass('active')).toBe(true);  

            clock.tick(1);
            expect(fixture.hasClass('active')).toBe(false);  
        });

        it('should deactivate itself when stopping to touch before the 700ms', function(){
           // act
           kudoable.trigger('touchend');

           // assert
           expect(fixture.hasClass('active')).toBe(false); 
        });

    });

    describe('when completing', function(){

        it('should add the complete class to the element it is bound to', function(){
            
            // act
            kudoable.trigger('touchstart');
            clock.tick(700);

            //assert
            expect(fixture.hasClass('complete')).toBe(true);
        });

    });

});