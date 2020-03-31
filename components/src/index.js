import React from 'react';
import ReactDOM from 'react-dom'
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container elements">
      <br></br>
      <br></br>
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          <p>Are you sure you want to show this?</p>
        </div>
        <CommentDetail
          author="Sam"
          date="Today at 4:45pm"
          profpic ={faker.image.avatar()}
          content = "Nice!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Tom"
          date="Today at 2am"
          profpic ={faker.image.avatar()}
          content= "How are you feeling?"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          date="Yesterday at 5pm"
          profpic ={faker.image.avatar()}
          content="Good stuff mate."
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

