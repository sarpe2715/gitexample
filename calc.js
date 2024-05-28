exports.checkPrime = function(a)
{
    for(let i = 2; i <= a/2; i++)
        {
            flag = 1;
            if(a % i === 0)
                {
                    flag = 0;
                    return false;
                    break;
                }
            if(flag === 1)
                return true;
        }
}