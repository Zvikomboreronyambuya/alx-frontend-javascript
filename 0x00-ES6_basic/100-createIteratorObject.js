export default function createIteratorObject(report) {
  let currentDeptIndex = 0;
  let currentEmpIndex = 0;
  const departments = Object.keys(report);

  return {
    next() {
      const currentDept = departments[currentDeptIndex];
      const currentDeptEmployees = report[currentDept];
      if (currentDeptEmployees && currentEmpIndex < currentDeptEmployees.length) {
        const result = { value: currentDeptEmployees[currentEmpIndex], done: false };
        currentEmpIndex++;
        return result;
      } else {
        currentDeptIndex++;
        currentEmpIndex = 0;
        if (currentDeptIndex < departments.length) {
          return this.next(); // Move to the next department
        } else {
          return { done: true }; // Iterator finished
        }
      }
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}

