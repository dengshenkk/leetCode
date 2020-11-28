/**
  Person
  | --- id --- | --- Email    --- |
  | ---  1 --- | --- a@qq.com --- |
  | ---  2 --- | --- b@qq.com --- |
  | ---  3 --- | --- a@qq.com --- |


  Result
  | --- Email    --- |
  | --- a@qq.com --- |

 */

select Email from Person group by Email having count (Email) > 1;
