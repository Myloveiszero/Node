##  分治
分而治之

##  快排
    partition /小算法
1.  基准值
2.  比基准值小的数  基准值  比基准值大的数
    1.  left： 从数组左边往右边扫描，比基准值大的数， 换到后面去
    2.  right： 从数组右边往左边扫描，比基准值小的数， 换到前面去
    3.  ! left < right: 找到了
3.  基准值归位