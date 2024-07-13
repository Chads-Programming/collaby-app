"use client";
import { Button } from "@/components/ui/button";
import {
  Pagination as PaginationRadix,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

interface PaginationProps {
  currentPage: number;
}

export const Pagination = ({ currentPage }: PaginationProps) => {
  const searchParams = useSearchParams();
  const search = new URLSearchParams(searchParams);
  search.delete("page");
  const pageCount = 5;
  return (
    <PaginationRadix>
      <PaginationContent>
        <Button variant="ghost" disabled={currentPage === 0}>
          <PaginationItem className="text-black" >
            <PaginationPrevious scroll={false} href={`/?page=${currentPage - 1}`} />
          </PaginationItem>
        </Button>
        <Button variant="ghost" disabled={true}>
          <PaginationItem
            className={"text-primary"}
          >
            <PaginationLink scroll={false} href={`/?page=${currentPage}`} isActive>{currentPage + 1}</PaginationLink>
          </PaginationItem>
        </Button>
        <PaginationItem className="text-black">
          <PaginationEllipsis />
        </PaginationItem>
        <Button variant="ghost" disabled={currentPage >= pageCount}>
          <PaginationItem className="text-black">
            <PaginationNext
              href={`/?page=${currentPage + 1}&${search.toString()}`}
              scroll={false}
            />
          </PaginationItem>
        </Button>
      </PaginationContent>
    </PaginationRadix>
  );
};
