(function($, undefined){

    var Kudoable,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

    Kudoable = (function() {

        function Kudoable(element){
            this.element = element;

            this.start = __bind(this.start, this);

            $(document).on('touchstart', this.element, this.start);
        }

        Kudoable.prototype.start = function(){
            this.element.addClass('active');
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