;(function ($, window, document) {
    $.fn.ncAffix = function (options) {
        const that = this

        function affixFactory(options) {
            const _opts = Object.assign({
                offset: 0,
                position: 'top',
                target: null,
                zIndex: 100,
                onChange: () => {
                },
                onScroll: () => {
                },
            }, options || {})

            let affixing = false
            const domOffset = that.offset()
            const domHeight = that.height()
            const targetOffset = _opts.target ? $(_opts.target).offset() : null
            const targetHeight = _opts.target ? $(_opts.target).height() : null
            const oldCss = {};
            ['left', 'top', 'right', 'bottom', 'position', 'z-index'].map(function (item) {
                oldCss[item] = that.css(item)
            })
            const newLeft = parseInt(oldCss.left.replace('px', '')) + that.parent().offset().left

            function adjustToast() {
                const scrollH = document.documentElement.scrollTop || document.body.scrollTop
                if (typeof _opts.onScroll === 'function') {
                    _opts.onScroll.call(this, scrollH)
                }

                if (_opts.position === 'top') {
                    //以上边界判定
                    if (scrollH - domOffset.top + _opts.offset >= 0) {
                        if (!affixing) {
                            affixing = true
                            that.addClass('affixing')
                            that.css({ position: 'fixed', top: _opts.offset, left: newLeft, zIndex: _opts.zIndex })
                            if (typeof _opts.onChange === "function") {
                                _opts.onChange.call(this, that, true)
                            }
                        }
                    } else {
                        if (affixing) {
                            affixing = false
                            that.removeClass('affixing')
                            that.css(oldCss)
                            if (typeof _opts.onChange === "function") {
                                _opts.onChange.call(this, that, false)
                            }
                        }
                    }
                    if (_opts.target) {
                        const topVal = scrollH - targetOffset.top - targetHeight + domHeight + _opts.offset
                        if (topVal >= 0) {
                            that.css('transform', 'translateY(' + -1 * topVal + 'px)')
                        }
                    }
                }
                if (_opts.position === 'bottom') {
                    //以下边界判定
                    if (scrollH + window.innerHeight - _opts.offset >= domHeight + domOffset.top) {
                        if (!affixing) {
                            affixing = true
                            that.addClass('affixing')
                            that.css({ position: 'fixed', bottom: _opts.offset, top: 'auto', left: newLeft, zIndex: _opts.zIndex })
                            if (typeof _opts.onChange === "function") {
                                _opts.onChange.call(this, that, true)
                            }
                        }
                    } else {
                        if (affixing) {
                            affixing = false
                            that.removeClass('affixing')
                            that.css(oldCss)
                            if (typeof _opts.onChange === "function") {
                                _opts.onChange.call(this, that, false)
                            }
                        }
                    }
                }
            }

            $(window).scroll(adjustToast)
        }

        return new affixFactory(options)
    }
})(jQuery, window, document)

