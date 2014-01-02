(function($, undefined){

    var Kudoable,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

    Kudoable = (function() {

        function Kudoable(element){
            this.element = element;

            this.start = __bind(this.start, this);
            this.stop = __bind(this.stop, this);
            this.complete = __bind(this.complete, this);

            $(document).on('touchstart', this.element, this.start);
            $(document).on('touchend', this.element, this.stop);
        }

        Kudoable.prototype.start = function(){
            var self = this;
            
            this.element.addClass('active');

            setTimeout(this.complete, 700);
        };

        Kudoable.prototype.stop = function(){
            this.element.removeClass('active');
        };

        Kudoable.prototype.complete = function(){
            this.stop();
            this.element.addClass('complete');
        };

        return Kudoable;

    })();

    $(function(){
        $.fn.kudoable = function() {
            return this.each(function(){
                return new Kudoable($(this));
            });
        };
    })

})(jQuery);