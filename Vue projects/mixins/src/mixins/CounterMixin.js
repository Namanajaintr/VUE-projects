export default function CounterMixin(
  initialCount,
  incCountValue,
  decCountValue
) {
  return {
    data() {
      return {
        counter: initialCount,
      };
    },
    methods: {
      increment() {
        this.counter += incCountValue;
      },
      decrement() {
        this.counter -= decCountValue;
      },
      reset() {
        this.counter = initialCount;
      },
    },
  };
}
