import React from "react";
import styled from "styled-components";
import Field from "@/components/field";
import Dropdown from "@/components/dropdown";
import Input from "@/components/input";
import { Region } from "@/types/region";
import { useRouter } from "next/router";
import { SearchParams } from "@/types/search";
import { useHomeSearch } from "@/hooks/use-home-search";
import { Flex } from "rebass";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > * + * {
    margin-left: 10px;
  }
`;

interface IContentProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  width: string | number;
}

const Content = styled.div<IContentProps>`
  width: ${({ width }) => width};
  display: flex;
  margin-bottom: 24px;

  > * + * {
    border-left: 1px solid transparent;
  }

  > *:first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  > *:last-child {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`;

type FilterKey =
  | "order"
  | "guests"
  | "regionID"
  | "coupon"
  | "endDate"
  | "startDate";

export default function SearchBar({ regions, query, params }: SearchParams) {
  const router = useRouter();

  const { setCurrentPage } = useHomeSearch();

  const order = query?.order || "RELEVANCE";
  const guests = query?.guests || 1;
  const coupon = query?.coupon || "";
  const regionName = params?.regionName || "";

  const endDate = query?.endDate || "";
  const startDate = query?.startDate || "";

  function handleFilters(key: FilterKey, value: string | number) {
    setCurrentPage(1);

    if (router.pathname === "/homes/[regionName]") {
      router.push({
        pathname: `/homes/${regionName}`,
        query: {
          order,
          guests,
          coupon,
          endDate,
          startDate,
          [key]: value,
        },
      });
    } else {
      router.push({
        pathname: "/homes",
        query: {
          order,
          guests,
          coupon,
          endDate,
          startDate,
          [key]: value,
        },
      });
    }
  }

  function handleRegion(selectedRegion: string) {
    setCurrentPage(1);

    if (selectedRegion !== "") {
      router.push({
        pathname: `/homes/${selectedRegion}`,
        query: {
          order,
          guests,
          coupon,
          endDate,
          startDate,
        },
      });
    } else {
      router.push({
        pathname: "/homes",
        query: {
          order,
          guests,
          coupon,
          endDate,
          startDate,
        },
      });
    }
  }

  return (
    <Container>
      <Content width="80%">
        <Field label="Where">
          <Dropdown
            onChange={(e: React.FormEvent<HTMLSelectElement>) =>
              handleRegion(e.currentTarget.value)
            }
            defaultValue={regionName}
          >
            <option value="">
              {regions ? "Any destination" : "Loading..."}
            </option>

            {regions &&
              regions.map((region: Region) => (
                <option key={region.id} value={region.name}>
                  {`${region.name}, ${region.stateName}`}
                </option>
              ))}
          </Dropdown>
        </Field>
        <Field label="When">
          <Flex>
            <Input
              id="startDate"
              min={new Date().toISOString().split("T")[0]}
              max="2030-12-31"
              type="date"
              defaultValue={startDate || ""}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                handleFilters("startDate", e.currentTarget.value)
              }
              style={{ marginRight: 10 }}
            />
            <Input
              id="endDate"
              min={new Date().toISOString().split("T")[0]}
              max="2030-12-31"
              type="date"
              defaultValue={endDate || ""}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                handleFilters("endDate", e.currentTarget.value)
              }
            />
          </Flex>
        </Field>
        <Field label="Who">
          <Input
            min={1}
            max={30}
            type="number"
            step={1}
            value={guests}
            maxLength={2}
            // TODO: Improvement -> Debounce it
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              handleFilters("guests", Number(e.currentTarget.value))
            }
          />
        </Field>
        <Field label="Order">
          <Dropdown
            defaultValue={order}
            onChange={(e: React.FormEvent<HTMLSelectElement>) =>
              handleFilters("order", e.currentTarget.value)
            }
          >
            <option value="RELEVANCE">Relevance</option>
            <option value="PRICE_ASC">Price: lowest first</option>
            <option value="PRICE_DESC">Price: highest first</option>
          </Dropdown>
        </Field>
      </Content>

      <Content width="20%">
        <Field label="Coupon">
          <Input
            type="text"
            defaultValue={coupon}
            // TODO: Improvement -> Debounce it
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              handleFilters("coupon", e.currentTarget.value)
            }
          />
        </Field>
      </Content>
    </Container>
  );
}
