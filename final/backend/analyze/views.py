from django.shortcuts import HttpResponse
# Create your views here.
from common.analyze_data import analyze


def food_analyze(request, *args, **kwargs):
    # 解析前端传递过来的参数
    p1 = request.GET.get('p1')
    p2 = request.GET.get('p2')
    p3 = request.GET.get('p3')
    p4 = request.GET.get('p4')
    result = analyze(p1, p2, p3, p4)  # 将前端传递过来的参数传递

    return HttpResponse(result)


