def buyChoco(prices, money):
    prices.sort()
    if prices[0] + prices[1] > money:
        return money
    return money - (prices[0] + prices[1])