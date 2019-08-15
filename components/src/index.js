import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>Are you sure you would like to begin</ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="Today at 4:45PM" content="Nice blog post!" avatar={Faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail author="Alex" timeAgo="Today at 5:40PM" content="Source material?" avatar={Faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail author="Jamie" timeAgo="Today at 5:42PM" content="Where do you draw the line here?" avatar={Faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail author="Sunil" timeAgo="Today at 6:00PM" content="Good stuff." avatar={Faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail author="Ellen" timeAgo="Today at 7:22PM" content="Whaaat. Noice. Got any more? :P" avatar={Faker.image.avatar()}/>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))
