import { render, screen } from "@testing-library/react";
import RestuarantCard, {
  withPromotedRestuarantCard,
} from "../components/RestuarantCard";
import MOCK_DATA from "../mock/ResCard.json";
import "@testing-library/jest-dom";

it("Should render Resturant Card with props", () => {
  render(<RestuarantCard resData={MOCK_DATA} />);

  const resName = screen.getByText("Burger King");
  expect(resName).toBeInTheDocument();
});

const PromotedRestaurantCard = withPromotedRestuarantCard(RestuarantCard);

test("should display discount subHeader when no discountTag is present", () => {
  render(<PromotedRestaurantCard resData={MOCK_DATA} />);

  expect(screen.getByText("AT ₹99")).toBeInTheDocument();
});

test("should not display subHeader when discountTag is present", () => {
  const modifiedMockResData = {
    ...MOCK_DATA,
    info: {
      ...MOCK_DATA.info,
      aggregatedDiscountInfoV3: {
        ...MOCK_DATA.info.aggregatedDiscountInfoV3,
        discountTag: "Discount",
      },
    },
  };

  render(<PromotedRestaurantCard resData={modifiedMockResData} />);

  expect(screen.queryByText("AT ₹99")).toBeNull();
});
