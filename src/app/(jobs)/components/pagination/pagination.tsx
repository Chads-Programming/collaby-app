"use client";
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

	return (
		<PaginationRadix>
			<PaginationContent>
				<PaginationItem className="text-black">
					<PaginationPrevious href={``} />
				</PaginationItem>
				<PaginationItem
					className={`${currentPage === 1 ? "text-primary" : "text-black"}`}
				>
					<PaginationLink href={`/?page=${currentPage + 1}`}>1</PaginationLink>
				</PaginationItem>
				<PaginationItem className="text-black">
					<PaginationEllipsis />
				</PaginationItem>
				<PaginationItem className="text-black">
					<PaginationNext
						href={`/?page=${currentPage + 1}&${search.toString()}`}
					/>
				</PaginationItem>
			</PaginationContent>
		</PaginationRadix>
	);
};
