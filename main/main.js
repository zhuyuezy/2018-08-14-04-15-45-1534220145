// Write your cade below:
module.exports = function main(dividend, divisor) {
	if (divisor==0)
	{
		console.log("0 should not be divisor.");
		return;
	}
	var result = dividend % divisor;
	return result;
  
};