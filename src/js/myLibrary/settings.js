const onPageQueue = {
  boolein: false,
  booleinChange(value) {
    this.boolein = value;
  },
  get() {
    return this.boolein;
  },
};

export default onPageQueue;
