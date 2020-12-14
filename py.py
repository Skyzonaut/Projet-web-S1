ADN = 'A T T G C A'
def arn(adn):
    if "T" in adn :
        return adn.replace("T", "U")
    else :
        return False
print(arn(ADN))
