// All the necessary functions
import { buttonVisibility } from "./utils/buttonsVisibility.js";
import { checkInputCharacters } from "./utils/checkInputCharacters.js";
import { clearModal } from "./utils/clearModal.js";
import { toggleModal } from "./utils/toggleModal.js";
import { updateAttributes } from "./utils/updateAttributes.js";
import { updateDOM } from "./utils/updateDOM.js";
import { updateDigits } from "./utils/updateDigits.js";
import { updateModalValues } from "./utils/updateModalValues.js";

// Buttons Available
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const edit = document.querySelector(".edit");
const confirmBtn = document.querySelector(".confirm");
const cancel = document.querySelector(".cancel");
const reset = document.querySelector(".reset");

// Inputs Available
const hoursInputHTML = document.querySelector(".input-hours");
const minutesInputHTML = document.querySelector(".input-minutes");
const secondsInputHTML = document.querySelector(".input-seconds");

// HTML elements for the Attributes
const hoursElement = document.querySelector('.bloc-time.hours');
const minutesElement = document.querySelector('.bloc-time.min');
const secondsElement = document.querySelector('.bloc-time.sec');

// Create Countdown
var Countdown = {
    // Backbone-like structure
    $el: $('.countdown'),

    // Params
    countdown_interval: null,
    total_seconds: 0,

    isRunningCountdown: false,
    isEditable: false,

    hoursRemaining: 24,
    minutesRemaining: 0,
    secondsRemaining: 0,

    pauseCountdown: function () {
        clearInterval(this.countdown_interval);
    },

    // Initialize the countdown  
    init: function () {
        document.addEventListener("DOMContentLoaded", () => {
            buttonVisibility(this.isRunningCountdown, start, pause, edit);
            updateDOM(this.hoursRemaining, this.minutesRemaining, this.secondsRemaining, updateDigits);

            checkInputCharacters(hoursInputHTML);
            checkInputCharacters(minutesInputHTML);
            checkInputCharacters(secondsInputHTML);

            toggleModal(this.isEditable);
        }),

            // DOM
            this.$ = {
                hours: this.$el.find('.bloc-time.hours .figure'),
                minutes: this.$el.find('.bloc-time.min .figure'),
                seconds: this.$el.find('.bloc-time.sec .figure'),
            };

        // Init countdown values
        this.values = {
            hours: this.$.hours.parent().attr('hours'),
            minutes: this.$.minutes.parent().attr('minutes'),
            seconds: this.$.seconds.parent().attr('seconds'),
        };

        // Initialize total seconds
        this.total_seconds = this.values.hours * 60 * 60 + (this.values.minutes * 60) + this.values.seconds;

        const that = this;

        // done
        start.addEventListener("click", function () {
            if (!that.isRunningCountdown) {
                that.isRunningCountdown = true;
                that.count();
                buttonVisibility(that.isRunningCountdown, start, pause, edit);
            }
        });

        pause.addEventListener("click", function () {
            that.pauseCountdown();
            that.isRunningCountdown = false;
            buttonVisibility(that.isRunningCountdown, start, pause, edit);
        });

        // done
        edit.addEventListener("click", function () {
            this.isEditable = true;
            toggleModal(this.isEditable);
        });

        // done
        confirmBtn.addEventListener("click", function () {
            that.isEditable = false;
            toggleModal(this.isEditable);

            const { hours, minutes, seconds } = updateModalValues(
                hoursInputHTML,
                minutesInputHTML,
                secondsInputHTML,
                that.hoursRemaining,
                that.minutesRemaining,
                that.secondsRemaining,
                updateDigits
            );

            that.hoursRemaining = hours;
            that.minutesRemaining = minutes;
            that.secondsRemaining = seconds;

            updateAttributes(that, hoursElement, minutesElement, secondsElement, hours, minutes, seconds, updateDigits);

            clearModal(hoursInputHTML, minutesInputHTML, secondsInputHTML);
        });

        // done
        cancel.addEventListener("click", function () {
            that.isEditable = false;
            toggleModal(this.isEditable);
            clearModal(hoursInputHTML, minutesInputHTML, secondsInputHTML);
        });

        // done
        reset.addEventListener("click", function () {
            that.hoursRemaining = 0;
            that.minutesRemaining = 0;
            that.secondsRemaining = 0;

            updateAttributes(that, hoursElement, minutesElement, secondsElement, that.hoursRemaining, that.minutesRemaining, that.secondsRemaining, updateDigits);

            clearModal(hoursInputHTML, minutesInputHTML, secondsInputHTML);
            updateDOM(that.hoursRemaining, that.minutesRemaining, that.secondsRemaining, updateDigits);
        });
    },

    // done
    count: function () {
        var that = this,
            $hour_1 = this.$.hours.eq(0),
            $hour_2 = this.$.hours.eq(1),
            $min_1 = this.$.minutes.eq(0),
            $min_2 = this.$.minutes.eq(1),
            $sec_1 = this.$.seconds.eq(0),
            $sec_2 = this.$.seconds.eq(1);

        this.countdown_interval = setInterval(function () {

            if (that.total_seconds > 0) {

                --that.values.seconds;

                if (that.values.minutes >= 0 && that.values.seconds < 0) {

                    that.values.seconds = 59;
                    --that.values.minutes;
                }

                if (that.values.hours >= 0 && that.values.minutes < 0) {

                    that.values.minutes = 59;
                    --that.values.hours;
                }

                // Update DOM values
                // Hours
                that.checkHour(that.values.hours, $hour_1, $hour_2);

                // Minutes
                that.checkHour(that.values.minutes, $min_1, $min_2);

                // Seconds
                that.checkHour(that.values.seconds, $sec_1, $sec_2);

                --that.total_seconds;
            }
            else {
                clearInterval(that.countdown_interval);
            }
        }, 1000);
    },

    // done
    animateFigure: function ($el, value) {

        var that = this,
            $top = $el.find('.top'),
            $bottom = $el.find('.bottom'),
            $back_top = $el.find('.top-back'),
            $back_bottom = $el.find('.bottom-back');

        // Before we begin, change the back value
        $back_top.find('span').html(value);

        // Also change the back bottom value
        $back_bottom.find('span').html(value);

        // Then animate
        TweenMax.to($top, 0.8, {
            rotationX: '-180deg',
            transformPerspective: 300,
            ease: Quart.easeOut,
            onComplete: function () {

                $top.html(value);

                $bottom.html(value);

                TweenMax.set($top, { rotationX: 0 });
            }
        });

        TweenMax.to($back_top, 0.8, {
            rotationX: 0,
            transformPerspective: 300,
            ease: Quart.easeOut,
            clearProps: 'all'
        });
    },

    // done
    checkHour: function (value, $el_1, $el_2) {

        var val_1 = value.toString().charAt(0),
            val_2 = value.toString().charAt(1),
            fig_1_value = $el_1.find('.top').html(),
            fig_2_value = $el_2.find('.top').html();

        if (value >= 10) {

            // Animate only if the figure has changed
            if (fig_1_value !== val_1) this.animateFigure($el_1, val_1);
            if (fig_2_value !== val_2) this.animateFigure($el_2, val_2);
        }
        else {

            // If we are under 10, replace first figure with 0
            if (fig_1_value !== '0') this.animateFigure($el_1, 0);
            if (fig_2_value !== val_1) this.animateFigure($el_2, val_1);
        }
    },
};

// Let's go !
Countdown.init();