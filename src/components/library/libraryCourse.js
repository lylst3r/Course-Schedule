import React, { Component } from 'react';

import Icon from '../icon';
import Arrow from '../arrow';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <div className="library-course__title-arrow">
                    <label className="library-course__title">Problem Solving</label>
                    { Icon('fas fa-check', 'library-course__icon') }
                </div>
                <Arrow className="library-course__arrow"/>
                { Icon('fas fa-plus-circle', 'library-course__description')}
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum blandit nibh, et venenatis quam tempor vel. Nam turpis enim, varius at arcu non, ultricies consectetur enim. </p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;