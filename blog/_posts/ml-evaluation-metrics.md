---
title: '머신러닝 모델 성능 평가 지표 완전 가이드'
date: '2025-09-03'
excerpt: '정확도, 정밀도, 재현율부터 F1-Score, AUC-ROC까지 모든 평가 지표를 한번에 정리했습니다.'
tags: ['머신러닝', '평가지표', '모델성능']
---

# 머신러닝 모델 성능 평가의 모든 것

머신러닝 모델을 구축했다면, 이제 그 성능을 정확히 평가해야 합니다. 하지만 어떤 지표를 사용해야 할지 헷갈리시나요? 오늘은 다양한 평가 지표들을 체계적으로 알아보겠습니다.

## 1. 분류(Classification) 성능 평가

### 기본 개념: Confusion Matrix

모든 분류 성능 지표의 출발점은 **혼동행렬(Confusion Matrix)**입니다:

```python
import numpy as np
from sklearn.metrics import confusion_matrix, classification_report
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

# 샘플 데이터 생성
np.random.seed(42)
X = np.random.rand(1000, 4)
y = np.random.randint(0, 2, 1000)

# 모델 훈련
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)
model = RandomForestClassifier()
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

# Confusion Matrix
cm = confusion_matrix(y_test, y_pred)
print("Confusion Matrix:")
print(cm)
```

### 핵심 평가 지표들

#### 1) 정확도 (Accuracy)
가장 직관적인 지표이지만, **불균형 데이터**에서는 주의가 필요합니다.

```python
from sklearn.metrics import accuracy_score

accuracy = accuracy_score(y_test, y_pred)
print(f"정확도: {accuracy:.4f}")

# 불균형 데이터 예시
# 99% 정상, 1% 이상 -> 모든 걸 정상이라고 해도 99% 정확도!
```

#### 2) 정밀도 (Precision)
"양성으로 예측한 것 중 실제 양성의 비율"

```python
from sklearn.metrics import precision_score

precision = precision_score(y_test, y_pred)
print(f"정밀도: {precision:.4f}")

# 언제 중요한가?
# - 스팸 메일 탐지: 정상 메일을 스팸으로 분류하면 안 됨
# - 의료 진단: 건강한 사람을 환자로 진단하면 불필요한 치료
```

#### 3) 재현율 (Recall)
"실제 양성 중 양성으로 예측한 비율"

```python
from sklearn.metrics import recall_score

recall = recall_score(y_test, y_pred)
print(f"재현율: {recall:.4f}")

# 언제 중요한가?
# - 암 진단: 암 환자를 놓치면 안 됨
# - 사기 탐지: 사기 거래를 놓치면 큰 손실
```

#### 4) F1-Score
정밀도와 재현율의 조화평균으로, **불균형한 상황**에서 유용합니다.

```python
from sklearn.metrics import f1_score

f1 = f1_score(y_test, y_pred)
print(f"F1-Score: {f1:.4f}")

# F1 = 2 * (Precision * Recall) / (Precision + Recall)
```

## 2. 고급 평가 지표

### ROC Curve와 AUC

```python
from sklearn.metrics import roc_curve, auc
import matplotlib.pyplot as plt

# 확률 예측값 필요
y_pred_proba = model.predict_proba(X_test)[:, 1]

# ROC Curve 계산
fpr, tpr, thresholds = roc_curve(y_test, y_pred_proba)
roc_auc = auc(fpr, tpr)

# 시각화
plt.figure(figsize=(8, 6))
plt.plot(fpr, tpr, color='darkorange', lw=2, 
         label=f'ROC curve (AUC = {roc_auc:.2f})')
plt.plot([0, 1], [0, 1], color='navy', lw=2, linestyle='--')
plt.xlim([0.0, 1.0])
plt.ylim([0.0, 1.05])
plt.xlabel('False Positive Rate')
plt.ylabel('True Positive Rate')
plt.title('Receiver Operating Characteristic')
plt.legend(loc="lower right")
plt.show()

print(f"AUC-ROC: {roc_auc:.4f}")
```

### Precision-Recall Curve

불균형 데이터에서는 ROC보다 **PR Curve**가 더 유용할 수 있습니다:

```python
from sklearn.metrics import precision_recall_curve, average_precision_score

precision_vals, recall_vals, _ = precision_recall_curve(y_test, y_pred_proba)
ap_score = average_precision_score(y_test, y_pred_proba)

plt.figure(figsize=(8, 6))
plt.plot(recall_vals, precision_vals, color='blue', lw=2,
         label=f'PR curve (AP = {ap_score:.2f})')
plt.xlabel('Recall')
plt.ylabel('Precision')
plt.title('Precision-Recall Curve')
plt.legend()
plt.show()
```

## 3. 회귀(Regression) 성능 평가

### 기본 지표들

```python
from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score
from sklearn.linear_model import LinearRegression

# 회귀 데이터 생성
X_reg = np.random.rand(1000, 3)
y_reg = 2*X_reg[:, 0] + 3*X_reg[:, 1] + X_reg[:, 2] + np.random.normal(0, 0.1, 1000)

# 모델 훈련
X_train_reg, X_test_reg, y_train_reg, y_test_reg = train_test_split(X_reg, y_reg, test_size=0.3)
reg_model = LinearRegression()
reg_model.fit(X_train_reg, y_train_reg)
y_pred_reg = reg_model.predict(X_test_reg)

# 평가 지표들
mse = mean_squared_error(y_test_reg, y_pred_reg)
rmse = np.sqrt(mse)
mae = mean_absolute_error(y_test_reg, y_pred_reg)
r2 = r2_score(y_test_reg, y_pred_reg)

print(f"MSE: {mse:.4f}")
print(f"RMSE: {rmse:.4f}")
print(f"MAE: {mae:.4f}")
print(f"R²: {r2:.4f}")
```

### 지표별 특징과 사용 시기

| 지표 | 특징 | 언제 사용할까? |
|------|------|----------------|
| **MSE** | 큰 오차에 더 큰 페널티 | 이상치가 중요한 경우 |
| **RMSE** | 원본 단위로 해석 가능 | 직관적 해석이 필요한 경우 |
| **MAE** | 이상치에 robust | 이상치가 많은 데이터 |
| **R²** | 설명력 표현 | 모델의 전체적 성능 파악 |

## 4. 실전 팁과 주의사항

### 상황별 지표 선택 가이드

```python
def choose_metric(problem_type, data_characteristics):
    """
    문제 상황에 따른 적절한 평가 지표 추천
    """
    recommendations = {}
    
    if problem_type == "binary_classification":
        if data_characteristics["balanced"]:
            recommendations["primary"] = "Accuracy, F1-Score"
        else:
            recommendations["primary"] = "Precision, Recall, F1-Score, AUC-ROC"
            
        if data_characteristics["cost_sensitive"]:
            recommendations["secondary"] = "Precision-Recall Curve"
            
    elif problem_type == "regression":
        if data_characteristics["outliers"]:
            recommendations["primary"] = "MAE, Huber Loss"
        else:
            recommendations["primary"] = "RMSE, R²"
            
    return recommendations

# 사용 예시
result = choose_metric(
    problem_type="binary_classification",
    data_characteristics={"balanced": False, "cost_sensitive": True}
)
print(result)
```

### Cross-Validation으로 안정적 평가

```python
from sklearn.model_selection import cross_val_score, StratifiedKFold

# 교차 검증으로 성능 평가
cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
cv_scores = cross_val_score(model, X, y, cv=cv, scoring='f1')

print(f"CV F1-Scores: {cv_scores}")
print(f"평균: {cv_scores.mean():.4f} ± {cv_scores.std():.4f}")
```

## 마무리

모델 성능 평가는 단순히 하나의 숫자로 끝나는 것이 아닙니다. **비즈니스 목표**, **데이터 특성**, **비용 구조**를 모두 고려해야 합니다.

다음 포스트에서는 **모델 해석과 설명 가능한 AI**에 대해 다뤄보겠습니다. 성능도 중요하지만, 왜 그런 예측을 했는지 이해하는 것도 매우 중요하거든요!

### 핵심 정리
- **균형 데이터**: Accuracy, F1-Score
- **불균형 데이터**: Precision, Recall, AUC-ROC
- **비용 민감**: Precision-Recall Curve
- **회귀**: RMSE (해석성) vs MAE (robust성)

궁금한 점이나 다루었으면 하는 평가 지표가 있다면 댓글로 알려주세요! 📊✨
