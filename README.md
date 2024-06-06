# Weekend Health Take Home

## Problem Statement

Given a string $S$ and array of strings $A$, return all elements of $A$ such that each element can be formed of a partial rearrangement of the characters in $S$.

## Approach

It is true that "$S_1$ is a partial rearrangement of $S_2$" is equivalent to $\forall c \in S_1: \#[c, S_1] \leq \#[c, S_2]$, i.e. that the _count_ of each character in $S_1$ is less than or equal to the count of that character in $S_2$.

Our approach is a direct translation of the above method, by memoizing the count of $S$ across invocations using a closure. This results in a computational time complexity of $O(|A|)$.

## Automated Testing

Automated tests, configured with Jest can be ran via `npm test`.
