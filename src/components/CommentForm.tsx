import React from 'react';
import { Comment, useAddCommentMutation, useUpdateCommentMutation } from 'api/comments';
import styled from 'styled-components';

const getCurrentDay = () => new Date().toISOString().slice(0, 10);

interface ICommentForm {
  resetPage: () => void;
  formInputs: Comment;
  onFormInputs: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  resetFormValue: () => void;
}

function CommentForm({ resetPage, onFormInputs, resetFormValue, formInputs }: ICommentForm) {
  const [addComment] = useAddCommentMutation();
  const [updateComment] = useUpdateCommentMutation();

  const handleForm: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const { id, ...newComment } = formInputs;
    const profileImg = `https://picsum.photos/id/${Math.floor(Math.random() * 80)}/50/50`;

    if (id) {
      updateComment({
        id,
        ...newComment,
        createdAt: getCurrentDay(),
      });
    }
    
    if (!id) {
      addComment({
        ...newComment,
        createdAt: getCurrentDay(),
        profile_url: profileImg,
      });
      resetPage();
    }
    resetFormValue();
  };

  return (
    <FormStyle onSubmit={handleForm}>
      <Styledlabel>프로필 이미지</Styledlabel>
      <StyledInput
        type="text"
        name="profile_url"
        value={formInputs.profile_url}
        onChange={onFormInputs}
        placeholder="프로필 이미지는 랜덤등록"
        disabled={true}
      />

      <Styledlabel>작성자</Styledlabel>
      <StyledInput
        type="text"
        name="author"
        placeholder="작성자"
        value={formInputs.author}
        onChange={onFormInputs}
        required
      />

      <Styledlabel>내용</Styledlabel>
      <StyledTextarea
        name="content"
        placeholder="내용"
        value={formInputs.content}
        onChange={onFormInputs}
        required
      ></StyledTextarea>

      <CommentButton type="submit">등록</CommentButton>
    </FormStyle>
  );
}

export default CommentForm;

const FormStyle = styled.form`
  padding: 0 10px;
  margin: 50px 0;
`;

const Styledlabel = styled.label`
  font-weight: bold;
  font-size: 0.95em;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 5px 1%;
  margin: 10px 0;
  border: 1px solid rgb(133, 133, 133);
  box-sizing: border-box;
    
`;


const StyledTextarea = styled.textarea`
  width: 100%;
  height: 50px;
  padding: 5px 1%;
  margin: 10px 0;
  box-sizing: border-box;
`;

const CommentButton = styled.button`
  padding: 0 10px;
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