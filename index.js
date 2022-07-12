//Given an array of integers your solution should find the smallest integer

class SmallestIntegerFinder {
    findSmallestInt(args) {
      let few = args.sort(function(a, b){return a - b});
      let least = few[0]
      return least
      
      
    }
  }