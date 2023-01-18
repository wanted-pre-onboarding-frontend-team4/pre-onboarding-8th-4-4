import { useState } from "react";
import CommentForm from "components/CommentForm";
import CommentList from "components/CommentList";
import Paginations from "components/Paginations";
import {
  Comment,
  useDeleteCommentMutation,
  useGetCommentsQuery,
} from "api/comments";


const PAGE_LIMIT = "8";

const INIT_PAGE = 1;

const INIT_FORM_VALUE = {
  author: "",
  content: "",
  createdAt: "",
  profile_url: "",
};


function useStateWithReset<T>(
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>, () => void] {
  const [state, setState] = useState<T>(initialValue);

  const reset = () => {
    setState(() => initialValue);
  };

  return [state, setState, reset];
}

export { useStateWithReset };


export default function App() {
  const [page, setPage, resetPage] = useStateWithReset(INIT_PAGE);
  const [formInputs, setFormInputs, resetFormInputs] =
    useStateWithReset<Comment>(INIT_FORM_VALUE);

  const { data } = useGetCommentsQuery({
    _limit: PAGE_LIMIT,
    _page: page.toString(),
  });
  const [deleteComment] = useDeleteCommentMutation();

  const handleEiditButton = (comment: Comment) => {
    setFormInputs(() => ({ ...comment }));
  };

  const handleDeleteButton = (comment: Comment) => {
    deleteComment({ id: comment.id });
    resetPage();
  };

  const formInputsHandler: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (e) => {
    setFormInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <CommentList
        comments={data?.comments}
        onDeleteButton={handleDeleteButton}
        onEditButton={handleEiditButton}
      />
      <Paginations
        totalCount={data?.totalCount}
        pagePerCount={parseInt(PAGE_LIMIT)}
        page={page}
        onChange={(number) => setPage(number)}
      />
    
      <CommentForm
        formInputs={formInputs}
        onFormInputs={formInputsHandler}
        resetPage={resetPage}
        resetFormValue={resetFormInputs}
      />
    </div>
  );
}
