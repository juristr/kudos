describe('The Kudoable element', function(){

    var clock,
        fixture,
        kudoable,
        completeKudo = function(){
            kudoable.trigger('touchstart');
            clock.tick(700);
        },
        getKudoCount = function(){
            return parseInt(fixture.find('.count .num').html(),10);
        };

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

    describe('when instantiating', function(){
        it('should render the basic template', function(){
            // just some queries to make sure we render something
            expect(fixture.find('.kudobject').length).toBe(1);
            expect(fixture.find('.opening').length).toBe(1);
            expect(fixture.find('.count').length).toBe(1);
        });
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

        it('should return to its initial state when interrupting the touching', function(){
            kudoable.trigger('touchend');

            clock.tick(700);

            expect(fixture.hasClass('complete')).toBe(false);
            expect(fixture.hasClass('active')).toBe(false); 
        });

    });

    describe('when entering with the mouse', function(){

        beforeEach(function(){
            kudoable.trigger('mouseenter');
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

        it('should return to its initial state when leaving with the mouse', function(){
            kudoable.trigger('mouseleave');
            clock.tick(700);

            expect(fixture.hasClass('complete')).toBe(false);
            expect(fixture.hasClass('active')).toBe(false); 
        });

    });

    describe('when completing a kudo', function(){

        it('should add the complete class to the element it is bound to', function(){
            
            // act
            completeKudo();

            //assert
            expect(fixture.hasClass('complete')).toBe(true);
        });

        it('should increment the kudo count', function(){
            var actualCount = getKudoCount();

            completeKudo();

            expect(getKudoCount()).toBe(1);
        });

        it('cannot twice complete an already kudoed element', function(){
            completeKudo();
            completeKudo();

            expect(getKudoCount()).toBe(1);
        });
    });

    describe('when clicking on a previously kudoed element', function(){

        beforeEach(function(){
            completeKudo();

            fixture.trigger('click');
        });

        it('should undo the previously added kudo', function(){
            expect(fixture.hasClass('complete')).toBe(false);
        });

        it('should decrement the count', function(){
            expect(getKudoCount()).toBe(0);
        });

    });

});