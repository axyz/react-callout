import React, {Component, PropTypes} from 'react';

export default class Callout extends Component {
    render() {
        const {
            className,
            children,
            style,
            content,
            isOpen,
            zIndex,
            position,
            alignment,
            offset
        } = this.props;

        const direction = alignment === 'right' ? 'rtl' : 'ltr';
        const bottom = position === 'top' ? '100%' : 'auto';
        const transform = `translate3d(${offset.x}, ${offset.y}, 0)`;

        const wrapperClass = `callout_wrapper ${className}`;
        const wrapperStyle = Object.assign({}, style, {
            direction,
            position: 'relative'
        });

        const triggerStyle = {
            direction: 'ltr'
        };

        const contentStyle = {
            display: isOpen ? 'block' : 'none',
            direction: 'ltr',
            position: 'absolute',
            zIndex: zIndex,
            bottom,
            transform
        };

        return (
            <div className={wrapperClass} style={wrapperStyle}>
                <div className="callout_trigger" style={triggerStyle}>
                    {children}
                </div>
                <div className="callout_content" style={contentStyle}>
                    {content}
                </div>
            </div>
        );
    }
}

Callout.propTypes = {
    isOpen: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    zIndex: PropTypes.number,
    position: PropTypes.oneOf(['top', 'bottom']),
    alignment: PropTypes.oneOf(['left', 'right']),
    offset: PropTypes.shape({
        x: PropTypes.string,
        y: PropTypes.string
    })
};

Callout.defaultProps = {
    isOpen: false,
    className: '',
    style: {},
    zIndex: 99,
    position: 'top',
    alignment: 'left',
    offset: {
        x: '0',
        y: '0'
    }
};
