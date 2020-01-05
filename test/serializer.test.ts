import { JSONAPISerializer } from "../src/serializer";
import { IResource } from "../src/interface";

describe("Serializer", () => {
  it("should override the id field", () => {
    const response = {
      _id: "abc",
      firstName: "Subroto",
      lastName: "Biswas"
    };

    let json = new JSONAPISerializer("users", {
      id: "_id",
      attributes: ["firstName", "lastName"]
    }).serialize(response);

    expect((<IResource>json.data).id).toEqual("abc");
  });

  it("should serialize array objects", () => {
    const response = [
      {
        _id: "abc",
        firstName: "Subroto",
        lastName: "Biswas"
      },
      {
        _id: "xyz",
        firstName: "Aditi",
        lastName: "Agrawal"
      }
    ];

    let json = new JSONAPISerializer("users", {
      id: "_id",
      attributes: ["firstName", "lastName"]
    }).serialize(response);

    expect(json).toEqual({
      data: [
        {
          id: "abc",
          type: "users",
          attributes: {
            firstName: "Subroto",
            lastName: "Biswas"
          }
        },
        {
          id: "xyz",
          type: "users",
          attributes: {
            firstName: "Aditi",
            lastName: "Agrawal"
          }
        }
      ]
    });
  });

  it("should serialize plain objects", () => {
    const response = {
      _id: "abc",
      firstName: "Subroto",
      lastName: "Biswas"
    };

    let json = new JSONAPISerializer("users", {
      id: "_id",
      attributes: ["firstName", "lastName"]
    }).serialize(response);

    expect(json).toMatchObject({
      data: {
        id: "abc",
        type: "users",
        attributes: {
          firstName: "Subroto",
          lastName: "Biswas"
        }
      }
    });
  });
});
