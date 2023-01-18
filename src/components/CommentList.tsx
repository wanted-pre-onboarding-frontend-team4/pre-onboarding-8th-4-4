import { Comment } from '../api/comments';
import styled from 'styled-components';

interface ICommentList {
  comments?: Comment[];
  onEditButton: (comment: Comment) => void;
  onDeleteButton: (comment: Comment) => void;
}

function CommentList({ comments, onDeleteButton, onEditButton }: ICommentList) {
  const handleDeleteButton = (comment: Comment) => () => {
    onDeleteButton(comment);
  };

  const handleEditButton = (comment: Comment) => () => {
    onEditButton(comment);
  };
 
 
  return (
    <>
    
      {comments?.map((comment, key) => (
        <CommentWrapper key={key}>
          <img src={comment.profile_url} alt="" />

          {comment.author}

          <CreatedAt>{comment.createdAt}</CreatedAt>

          <Section>
            <Content>{comment.content}</Content>

            <CommentItem>
              <CommentButton onClick={handleEditButton(comment)}>수정</CommentButton>
              <CommentButton onClick={handleDeleteButton(comment)}>삭제</CommentButton>
            </CommentItem>
          </Section>

          <hr />
        </CommentWrapper>
      ))}
    </>
  );
}

export default CommentList;

const CommentWrapper = styled.div`
  padding: 7px 10px;
  text-align: left;

  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
  font-size: 0.9em;
  padding-right: 0.6em;
`;

const Content = styled.div`
  margin: 16px 0 20px 6px;
`;

  
const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommentItem= styled.div`
 display: flex;
 
  `

const CommentButton = styled.button`
  padding: 0 10px;
  margin: 50px 5px;
  background-color: #3C7ADC;
  color:white;
  font-size: 15px;
  height: 20px;
  width: 50px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: #a4c9f4;
  }
  `