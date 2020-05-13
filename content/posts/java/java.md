---
title: "Java 정리"
path: "/java"
tags: ["java"]
featuredImage: "./coffee.jpg"
excerpt: java 정리 
created: 2020-05-12
updated: 2020-05-12
---

## Thread

main() 하나가 하나의 스레드     
Class Thread     
interface Runnable      
스레드 사이에서 정보공유     
프로세스 사이에서 정보공유 안됨     


## Multi Thread

대용량의 데이터 처리 시간 단축     
데이터 분할 병렬 처리      
네트워크 통신      
다수 클라이언트의 요청 처리      
예외 처리에 집중      

## 관련 코드


> Thread.sleep(1000);       
> 1000 = 1초     

> thread.setPriority(Thread.MAX_PRIORITY);

## 관련 개념

우선순위 (Priority) : 개발자가 제어가능      
순환 할당 (Round-Robin) : 개발자가 제어 불가능       
동기화 (synchronized) : 다른 스레드가 현 스레드가 사용하고 있는 critical section 에 접근할수 없게 해준다.     
임계 영역 (critical section) : 멀티 스레드에서 단 하나의 스레드만 실행할 수 있는 영역

## 관련 내용 


