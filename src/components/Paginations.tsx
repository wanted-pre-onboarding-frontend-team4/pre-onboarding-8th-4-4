import styled from 'styled-components';

interface IPagination {
  totalCount?: number;
  pagePerCount: number;
  page: number;
  onChange: (number: number) => void;
}

export default function Paginations({ totalCount = 0, pagePerCount, page, onChange, ...props }: IPagination) {
  const pageLength = Math.ceil(totalCount / pagePerCount);
  const paginationList = [...new Array(pageLength)];

  const handlePrevButton = () => {
    onChange(page - 1);
  };

  const handleNextButton = () => {
    onChange(page + 1);
  };

  const handlePageButton = (page: number) => () => {
    onChange(page);
  };

  const renderPaginationList = () => {
    return (
      <>
        {paginationList.map((_, i) => {
          const pageNumber = i + 1;

          return (
            <Button key={pageNumber} onClick={handlePageButton(pageNumber)} active={pageNumber === page} >
              {pageNumber}
            </Button>
          );
        })}
      </>
    );
  };

  return (
    <PaginationList {...props}>
      <Button onClick={handlePrevButton} disabled={page === 1}>
        &lt;
      </Button>

      {renderPaginationList()}

      <Button onClick={handleNextButton} disabled={page === paginationList.length}>
        &gt;
      </Button>
    </PaginationList>
  );
}

const PaginationList = styled.ol`
  display: flex;
  gap: 4px;
  user-select: none;
  justify-content: center;
`;
interface Style extends Omit<React.CSSProperties, "padding" | "margin"> {
  padding?: number[];
  margin?: number[];
}

const Button = styled.button<Style & { active?: boolean }>`
  background-color: ${({ active }) => (active ? '#3C7ADC' : 'transparent')};
  color: ${({ active }) => (active ? 'white' : 'black')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  border: 1px solid black;
  border-radius: 20px;
  min-width: 35px;
  padding: 4px;
  border: none;
`;

