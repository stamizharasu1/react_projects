import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
            <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.avatar()}/>
            </a>
            <div className="content">
            <a href="/" className="author">
                Sam
            </a>
            <div className="metadata">
                <span className="data">Today at 6:00pm</span>
            </div>
                <div className="text"> Nice work. </div>
            </div>
        </div>

        <div className="comment">
            <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.avatar()}/>
            </a>
            <div className="content">
            <a href="/" className="author">
                Amira
            </a>
            <div className="metadata">
                <span className="data">Today at 6:00pm</span>
            </div>
                <div className="text"> Good stuff! </div>
            </div>
        </div>

        <div className="comment">
            <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.avatar()}/>
            </a>
            <div className="content">
            <a href="/" className="author">
                Damian
            </a>
            <div className="metadata">
                <span className="data">Today at 6:00pm</span>
            </div>
                <div className="text"> SPY puts? How original. </div>
            </div>
        </div>
    </div>
    );
};

export default CommentDetail;