import {
  Pagination as PaginationRadix,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";

interface PaginationProps {
  currentPage: number
}

export const Pagination = ({ currentPage = 1 }: PaginationProps) => {
  return (
    <PaginationRadix>
      <PaginationContent>
        <PaginationItem className="text-black">
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem className={`${currentPage === 1 ? 'text-primary' : 'text-black'}`}>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem className="text-black">
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem className="text-black">
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </PaginationRadix>
  );
};
