import removeDuplicates from "../helpers/removeDuplicates";

describe("removeDuplicates tests ", () => {
  test("It should remove duplicates", () => {
    const initialData = [
      { id: 1, value: "car" },
      { id: 1, value: "car" },
      { id: 2, value: "car" }
    ];
    const cleanedUpData = removeDuplicates(initialData, ["id"]);
    expect(cleanedUpData).toHaveLength(2);
  });
  test("It should remove correct duplicates", () => {
    const initialData = [
      { id: 1, value: "car" },
      { id: 1, value: "car" },
      { id: 2, value: "car" }
    ];
    const expectedCleanData = [
      { id: 1, value: "car" },
      { id: 2, value: "car" }
    ];
    const cleanedUpData = removeDuplicates(initialData, ["id"]);
    expect(cleanedUpData).toStrictEqual(expectedCleanData);
  });
  test("It should throw error incase keys are not found in all of the objects", () => {
    const initialData = [
      { id: 1, value: "car" },
      { id2: 1, value: "car" },
      { id: 2, value: "car" }
    ];
    function removeDuplicatesTest() {
      removeDuplicates(initialData);
    }
    expect(removeDuplicatesTest).toThrowError(
      new Error("No keys provided to compare the elements of array")
    );
  });
  test("It should throw error incase keys are not found in all of the objects", () => {
    const initialData = [
      { id: 1, value: "car" },
      { id2: 1, value: "car" },
      { id: 2, value: "car" }
    ];
    function removeDuplicatesTest() {
      removeDuplicates(initialData, ["id"]);
    }
    expect(removeDuplicatesTest).toThrowError(
      new Error(
        "The provided keys are not available in all of the objects provided in the array"
      )
    );
  });
});
