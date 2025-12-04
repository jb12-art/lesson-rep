describe("Greet Function", () => {
  it("should return the name provided", () => {
    const result = greet("John");
    expect(result).toBe("John");
  });
});

function greet(name) {
  return name;
}
